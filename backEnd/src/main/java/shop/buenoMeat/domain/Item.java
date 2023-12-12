package shop.buenoMeat.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import shop.buenoMeat.dto.ItemDto;
import shop.buenoMeat.exception.NotEnoughStockException;

import javax.persistence.*;
import java.time.LocalDateTime;
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
    private int price;

    @Column(nullable = false)
    private String weight;

    @Column(nullable = false)
    private String weightUnit;

    private int stock;

    @Column(nullable = false)
    private LocalDateTime enrolled;

    @Column(nullable = false, length = 1000)
    private String image;

    private Integer soldQuantity; // 판매수량, 판매량이 없는경우 0


    /***
     * 재고 감소
     */
    public void removeStock(int quantity) {
        int remainStock = this.stock - quantity;
        if (remainStock < 0) {
            throw new NotEnoughStockException("남아있는 재고가 없습니다.");
        }
        this.stock = remainStock;
    }
}
