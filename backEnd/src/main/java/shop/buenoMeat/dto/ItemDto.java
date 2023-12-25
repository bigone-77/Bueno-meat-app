package shop.buenoMeat.dto;

import lombok.*;
import shop.buenoMeat.domain.CategoryName;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ItemDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class itemDetailDto {
        private CategoryName category;
        private String name;
        private String info;
        private String image;
        private int price;
        private String weight;
        private String weightUnit;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class itemHotAndCategoryDto {
        private Long id;
        private CategoryName category;
        private String name;
        private String info;
        private String image;
        private int price;
        private String weight;
        private String weightUnit;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class mypageWishListDto {
        private Long id;
        private String name;
        private String info;
        private String image;
        private int price;
        private String weight;
        private String weightUnit;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class searchItemByNameDto {
        private Long id;
        private String image;
        private int price;
        private String name;
        private String weight;
        private String weightUnit;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class addToCartDto {
        private String itemName;
        private int itemCount;
        private int totalPrice;
        private String itemOption;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class getCartDto {
        private Long itemId;
        private String itemName;
        private int itemCount;
        private int totalPrice;
        private String itemOption;
        private int stock;
        private String image;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class reviewItemInfo {
        private Long itemId;
        private String itemName;
        private String itemImage;
        private int starRating;
        private String comment;
        private String reviewImage;
        private LocalDateTime reviewTime;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class reviewUserInfo {
        private String username;
        private int recommend;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class getReviewFormPage {
        private List<reviewItemInfo> itemInfos;
        private reviewUserInfo reviewUserInfo;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class enrollReviewDto {
        private int starRating;
        private String comment;
        private String reviewImage;
    }
}
