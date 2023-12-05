package shop.buenoMeat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.buenoMeat.service.WishListService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class WishListController {

    private final WishListService wishListService;

    //-- 찜 목록 추가 --//
    @PostMapping("/favorites/{memberId}/{itemId}")
    public ResponseEntity<String> addWishList(@PathVariable Long memberId, @PathVariable Long itemId) {
        return wishListService.addWishList(memberId, itemId);
    }

    //-- 찜 목록 삭제 --//
    @DeleteMapping("/favorites/{memberId}/{itemId}")
    public ResponseEntity<String>   removeWishList(@PathVariable Long memberId, @PathVariable Long itemId) {
        return wishListService.deleteWishList(memberId, itemId);
    }
}
