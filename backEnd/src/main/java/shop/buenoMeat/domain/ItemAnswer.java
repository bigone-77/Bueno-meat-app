package shop.buenoMeat.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ItemAnswer {

    @Id
    @GeneratedValue
    @Column(name = "itemAnswer_id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "itemQnA_id")
    private ItemQna itemQna;

    @Column(nullable = false)
    private String itemAnswer; // 답변내용

    @Column(nullable = false)
    private LocalDateTime answerTime; // 작성시간
}
