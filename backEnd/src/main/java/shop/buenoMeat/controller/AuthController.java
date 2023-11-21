package shop.buenoMeat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.buenoMeat.domain.Member;
import shop.buenoMeat.dto.LoginDto;
import shop.buenoMeat.dto.LoginResponseDto;
import shop.buenoMeat.dto.MemberJoinDto;
import shop.buenoMeat.repository.MemberRepository;
import shop.buenoMeat.service.MemberService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final MemberService memberService;
    private final MemberRepository memberRepository;

    @PostMapping("/auth/join")
    public ResponseEntity<String> join(@RequestBody MemberJoinDto memberJoinDto) {
        memberService.join(memberJoinDto.toEntity());
        return ResponseEntity.ok("회원가입이 성공적으로 완료됐습니다!");
    }

    @PostMapping("/auth/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginDto loginDto) {
        String email = loginDto.getEmail();
        String pw = loginDto.getPw();
        List<Member> findMember = memberRepository.findByEmail(loginDto.getEmail());
        if (findMember.get(0).getPw().equals(pw)) {
            LoginResponseDto loginResponseDto = new LoginResponseDto("로그인이 성공하였습니다.", findMember.get(0).getNickname());
            return ResponseEntity.ok(loginResponseDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
