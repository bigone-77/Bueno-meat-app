package shop.buenoMeat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import shop.buenoMeat.service.MemberService;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
}
