package shop.buenoMeat.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.buenoMeat.domain.Member;
import shop.buenoMeat.dto.ConvertToDto;
import shop.buenoMeat.dto.LoginDto;
import shop.buenoMeat.dto.MemberDto;
import shop.buenoMeat.dto.UpdateDto;
import shop.buenoMeat.repository.MemberRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    //-- 회원가입 --//
    @Transactional
    public Long join(Member member) {
        validateDuplicateMember(member); //중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    //-- 로그인 --//
    public ResponseEntity<LoginDto.loginResponseDto> login(LoginDto.loginRequestDto loginRequestDto) {
        String email = loginRequestDto.getEmail();
        String pw = loginRequestDto.getPw();
        List<Member> findMembers = memberRepository.findByEmail(email);
        Member findMember = findMembers.get(0);
        if (findMember.getPw().equals(pw)) {
            LoginDto.loginResponseDto loginResponseDto = new LoginDto.loginResponseDto("로그인이 성공하였습니다.", findMember.getNickname(), findMember.getId());
            return ResponseEntity.ok(loginResponseDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //--비밀번호 수정--//
    @Transactional
    public ResponseEntity<String> updatePw(Long id, UpdateDto.updatePwDto updatePwDto) {
        Member findMember = memberRepository.findOne(id);
        if (findMember.getPw().equals(updatePwDto.getPw())) {
            findMember.changePw(updatePwDto.getNewPw());
            return ResponseEntity.ok("비밀번호 변경이 완료되었습니다.");
        } else {
            return ResponseEntity.ok("현재 비밀번호가 일치하지 않습니다.");
        }
    }

    // ... (나머지 메서드들도 동일한 패턴으로 수정)

    //--중복 회원 검증--//
    private void validateDuplicateMember(Member member) {
        List<Member> findMember = memberRepository.findByEmail(member.getEmail());
        if (!findMember.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    //--닉네임으로 회원조회--//
    public MemberDto findById(Long id) {
        Member findMember = memberRepository.findOne(id);
        return ConvertToDto.convertToMemberDto(findMember);
    }
}
