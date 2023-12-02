package shop.buenoMeat.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import shop.buenoMeat.exception.NotEnoughStockException;

import javax.persistence.*;
<<<<<<< HEAD
=======
import java.time.LocalDateTime;
>>>>>>> main
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Item {

    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "item")
    private List<ItemReview> itemReviews = new ArrayList<>();

    @OneToMany(mappedBy = "item")
    private List<ItemQna> itemQnas = new ArrayList<>();

    @Column(nullable = false)
    private String name;

    private String info;

    @Column(nullable = false)
<<<<<<< HEAD
    private String price;
=======
    private int price;
>>>>>>> main

    @Column(nullable = false)
    private String weight;

<<<<<<< HEAD
    private int quantity;

    @Column(nullable = false)
    private String enrolled; // 상품등록일

    @Column(nullable = false)
=======
    @Column(nullable = false)
    private String weightUnit;

    private int quantity;

    @Column(nullable = false)
    private LocalDateTime enrolled;

    @Column(nullable = false, length = 1000)
>>>>>>> main
    private String image;

    private Integer soldQuantity; // 판매수량, 판매량이 없는경우 0


    /***
     * 재고 감소
     */
    public void removeStock(int quantity) {
        int remainStock = this.quantity - quantity;
        if (remainStock < 0) {
            throw new NotEnoughStockException("남아있는 재고가 없습니다.");
        }
        this.quantity = remainStock;
    }
}
