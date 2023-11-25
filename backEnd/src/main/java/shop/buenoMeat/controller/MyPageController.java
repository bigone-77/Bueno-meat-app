package shop.buenoMeat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.buenoMeat.domain.Member;
import shop.buenoMeat.dto.MemberDto;
import shop.buenoMeat.dto.UpdateDto;
import shop.buenoMeat.repository.MemberRepository;
import shop.buenoMeat.service.MemberService;


@RestController
@RequiredArgsConstructor
@RequestMapping("/mypage")
public class MyPageController {

    private final MemberService memberService;

    //--마이페이지 회원정보 --//
    @GetMapping("/{id}")
    public ResponseEntity<MemberDto> findMember(@PathVariable Long id) {
        MemberDto findMember = memberService.findById(id);
        return ResponseEntity.ok(findMember);
    }

    //--비밀번호 수정--//
    @PatchMapping("/{id}/password")
    public ResponseEntity<String> updatePw(@PathVariable Long id, @RequestBody UpdateDto.updatePwDto updatePwDto) {
        return memberService.updatePw(id, updatePwDto);
    }

}
