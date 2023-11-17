package shop.buenoMeat.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import shop.buenoMeat.domain.Member;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private final EntityManager em;

    public void save(Member member) {em.persist(member);} //회원 저장

    public Member findOne(Long id) {return em.find(Member.class, id);} // member_id 로 회원 검색

    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class).getResultList();
    } // 회원 전체를 리스트로 반환

    public List<Member> findByNickname(String nickname) {
        return em.createQuery("select m from Member m where m.nickname = :nickname", Member.class)
                .setParameter("nickname", nickname).getResultList();
    } // 닉네임으로 회원 조회
}
