package shop.buenoMeat.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ItemReview {

    @Id
    @GeneratedValue
    @Column(name = "review_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    @Column(name = "rev_comment", length = 500)
    private String comment; // 리뷰 내용

    @Column(name = "rev_writer")
    private String writer;

    @Column(name = "rev_date")
    private LocalDateTime reviewTime;
}
