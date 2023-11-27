package shop.buenoMeat.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class CartItem {

    @Id
    @GeneratedValue
    @Column(name = "cartItem_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id")
    private Cart cart;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    private Integer count;

    public void changeCount(Integer count) {
        this.count = count;
    }
}
