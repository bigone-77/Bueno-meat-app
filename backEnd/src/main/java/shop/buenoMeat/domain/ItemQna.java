package shop.buenoMeat.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ItemQna {

    @Id
    @GeneratedValue
    @Column(name = "itemQnA_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    @OneToMany(mappedBy = "itemQna", cascade = CascadeType.ALL)
    private List<ItemAnswer> itemAnswers = new ArrayList<>();

    @Column(nullable = false)
    private String title;

    @Column(name = "QnA_comment", nullable = false)
    private String comment;// 문의 내용

    @Column(name = "QnA_writer", nullable = false)
    private String writer;// 작성자

    @Column(nullable = false)
    private LocalDateTime qTime; // 문의 날짜

}
