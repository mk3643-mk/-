import { execSync } from 'child_process';

console.log('🌸 [꽃곰케이크] 개발 -> 운영 서버 동기화 프로세스를 시작합니다...\n');

function runCommand(command, description) {
  console.log(`⏳ ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} 성공!\n`);
    return output;
  } catch (error) {
    console.error(`❌ ${description} 실패!`);
    console.error(error.stdout || error.stderr || error.message);
    process.exit(1);
  }
}

try {
  // Step 1: Build & Verify Code
  runCommand('npm run build', '1. 소스코드 검증 및 빌드 테스트');

  // Step 2: Push current work to dev branch
  runCommand('git add .', '2. 변경사항 스테이징');
  
  try {
    execSync('git commit -m "feat: 개발 서버 변경사항 저장"', { stdio: 'ignore' });
    console.log('✅ 개발 버전 커밋 완료!\n');
  } catch (e) {
    console.log('ℹ 커밋할 새로운 변경사항이 없습니다.\n');
  }

  // Step 3: Push dev branch
  runCommand('git push origin dev', '3. 개발(dev) 저장소 동기화');

  // Step 4: Switch to main (prod), merge dev, push to main
  runCommand('git checkout main', '4. 운영(main) 브랜치 전환');
  runCommand('git merge dev --no-ff -m "chore: 개발서버 검증 완료 소스 운영서버 동기화"', '5. 검증된 개발 소스 운영 브랜치 병합');
  runCommand('git push origin main', '6. 운영(main) 저장소 동기화 완료');
  
  // Step 5: Switch back to dev
  runCommand('git checkout dev', '7. 작업 브랜치(dev) 원복');

  console.log('🎉 [동기화 완료] 개발 서버에서 검증된 최신 소스코드가 운영(main) 저장소로 성공적으로 반영되었습니다!\n');
} catch (err) {
  console.error('❌ 동기화 도중 오류가 발생했습니다:', err.message);
}
