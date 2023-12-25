package shop.buenoMeat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.buenoMeat.dto.ItemDto;
import shop.buenoMeat.service.ItemReviewService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/review")
public class ItemReviewController {

    private final ItemReviewService itemReviewService;

    //-- 리뷰(마이페이지) 불러오기 --//
    @GetMapping("/{memberId}")
    public ResponseEntity<ItemDto.getReviewFormPage> getReviewFormPage(@PathVariable Long memberId) {
        return ResponseEntity.ok(itemReviewService.getReviewFormPage(memberId));
    }

    //-- 리뷰 작성하기 --//
    @PostMapping("/{memberId}/{itemId}")
    public ResponseEntity<String> enrollReview(@PathVariable Long memberId, @PathVariable Long itemId, @RequestBody ItemDto.enrollReviewDto enrollReviewDto) {
        itemReviewService.enrollReview(memberId, itemId, enrollReviewDto);
        return ResponseEntity.ok("상품리뷰등록이 완료되었습니다.");
    }

}
