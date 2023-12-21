package shop.buenoMeat.domain;

import lombok.*;

import javax.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Table(name = "orders")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Order {

    @Id
    @GeneratedValue
    @Column(name = "order_id", nullable = false)
    private Long id; //pk

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();

    @Column(length = 30, nullable = false)
    private String recipient;

    @Column(name = "rcp_phone", length = 11, nullable = false)
    private String phone;

    @Column(name = "rcp_email", nullable = false)
    private String email;

    @Column(nullable = false)
    private LocalDateTime orderDate;

    @Column(name = "delivery_address", nullable = false)
    private String address;

    @Column(nullable = false)
    private String detailAddress;

    @Column(length = 100)
    private String memo;

    @Column(nullable = false)
    private int totalPrice;

    @Column(nullable = false, unique = true)
    private String orderNum;

    @Column(name = "usePoint")
    private int point;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus; // COMPLETE, CANCEL

    public Order(Member member, String recipient, String phone, String email, String address, String detailAddress,
                 String memo, int totalPrice, OrderStatus orderStatus, String orderNum, int point) {
        this.member = member;
        this.recipient = recipient;
        this.phone = phone;
        this.email = email;
        this.orderDate = LocalDateTime.now();
        this.address = address;
        this.detailAddress = detailAddress;
        this.memo = memo;
        this.totalPrice = totalPrice;
        this.orderStatus = orderStatus;
        this.orderNum = orderNum;
        this.point = point;
    }

    //--생성 메서드--//
    public static Order createOrder(Member member, String recipient, String phone, String email, String address,
                                    String detailAddress, String memo, int totalPrice, List<OrderItem> orderItems, String orderNum, int point) {
        Order order = new Order(member, recipient, phone, email, address, detailAddress, memo, totalPrice, OrderStatus.COMPLETE, orderNum, point);
        order.orderItems.addAll(orderItems);
        member.usePoint(point);
        return order;
    }

    //
}
