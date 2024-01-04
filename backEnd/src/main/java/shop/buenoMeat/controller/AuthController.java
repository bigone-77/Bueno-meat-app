package shop.buenoMeat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import shop.buenoMeat.dto.LoginDto;
import shop.buenoMeat.dto.MemberDto;
import shop.buenoMeat.service.MemberService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody MemberDto memberDto) {
        memberService.join(memberDto.toEntity(passwordEncoder));
        return ResponseEntity.ok("회원가입이 성공적으로 완료됐습니다!");
    }

    @PostMapping("/login")
    public ResponseEntity<LoginDto.loginResponseDto> login(@RequestBody LoginDto.loginRequestDto loginRequestDto) {
        return memberService.login(loginRequestDto);
    }

    @GetMapping("/jwt-test")
    public String jwtTest() {
        return "jwtTest 요청 성공";
    }
}
