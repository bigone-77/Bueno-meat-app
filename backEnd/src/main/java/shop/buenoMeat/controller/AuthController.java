package shop.buenoMeat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.buenoMeat.dto.LoginDto;
import shop.buenoMeat.dto.MemberDto;
import shop.buenoMeat.service.MemberService;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final MemberService memberService;

    @PostMapping("/auth/join")
    public ResponseEntity<String> join(@RequestBody MemberDto memberDto) {
        memberService.join(memberDto.toEntity());
        return ResponseEntity.ok("회원가입이 성공적으로 완료됐습니다!");
    }

    @PostMapping("/auth/login")
    public ResponseEntity<LoginDto.loginResponseDto> login(@RequestBody LoginDto.loginRequestDto loginRequestDto) {
        return memberService.login(loginRequestDto);
    }
}
