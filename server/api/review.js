const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(
    {
      review: [
        {
          id: 0,
          user: 'abcdef007',
          date: "2021-12-13",
          title: "배송빠르고 좋아요",
          desc: "첫구매인데 사은품도 잘 받았구요 피부정돈에 도움되면 좋겠어요",
          star: 5,
          pr_name:"포맨 스킨 에센스",
          thumb: "/assets/images/detail_thumb14.png",
        },
        {
          id: 1,
          user: 'qweasd123',
          date: "2021-11-10",
          title: "진정한 토너",
          desc: " 더 대용량으로 나와도 좋을것같아요^^",
          star: 5,
          pr_name:"세라마이딘 아이크림",
          thumb: "/assets/images/detail_thumb2.png",
        },
        {
          id: 2,
          user: 'pasta111',
          date: "2021-4-13",
          title: "샘플써보고 너무 좋아서 구매했습니다",
          desc: "효과가 진짜 좋았어요!! 잔 트러블이 많았는데 싹 없어졌습니다!",
          star: 5,
          pr_name:"바이옴 브이세븐 세럼",
          thumb: "/assets/images/detail_thumb13.png",
        },
        {
          id: 3,
          user: 'pizza1234',
          date: "2021-1-13",
          title: "좋아용!! 늘 잘 사용하고 잇습니당.",
          desc: " 공식몰에서 구입하니 적립금과 쿠폰도 주고 너무 좋네용",
          star: 5,
          pr_name:"크라이오 러버 위드 수딩 알란토인",
          thumb: "/assets/images/detail_thumb10.png",
        },
        {
          id: 4,
          user: 'lucky123',
          date: "2021-3-13",
          title: "추찬힙니다 꼭 사용해보세요!",
          desc: " 어쩌다 사용해보았는데 괜찮아서 크림은 남아서 토너만 재구매해보았습니다! 금방 흡수되고 트러블도 많이 호전된상태라 아주 만족합니다. 마스크탓에 턱에 트러블이 나고 사라지지않던아이들이 많이 들어간게 보여서 행복합니다ㅜㅜㅜ",
          star: 5,
          pr_name:"크라이오 러버 위드 모이스처라이징 히알루론산",
          thumb: "/assets/images/detail_thumb9.png",
        },
        {
          id: 5,
          user: 'lotto777',
          date: "2021-5-13",
          title: "시카라인 궁금했는데 마침 1+1행사를 해서 득템했어요~",
          desc: " 토너는 당장 사용하려기 보다는 한여름에 피부진정시킬용으로 미리 사두었어요 잘 써볼게요~",
          star: 5,
          pr_name:"브이세븐 토닝 라이트",
          thumb: "/assets/images/detail_thumb8.png",
        },
        {
          id: 6,
          user: 'abcdef007',
          date: "2021-12-13",
          title: "피부가 건조한 편이라 후기보고 바로 구매했어요ㅎ",
          desc: " 배때마침 원플러스원도 하구ㅎ 너무 잘 산거 같애여ㅎ 어제 저녁에 세안 후 바로 사용해봤는데 촉촉하구 제 피부에 맞는거 같애요^^",
          star: 5,
          pr_name:"포어레미디™ 파하 익스폴리에이팅 세럼",
          thumb: "/assets/images/detail_thumb7.png",
        },
        {
          id: 7,
          user: 'user1',
          date: "2021-7-13",
          title: "항상 믿고 구매하는 닥자입니다.",
          desc: " 지복합 트러블 피부인데 산뜻하고 촉촉하게 정리됩니다. 1 + 1 로 구입했네요.",
          star: 5,
          pr_name:"더마스크 포어레미디",
          thumb: "/assets/images/detail_thumb6.png",
        },
        {
          id: 8,
          user: 'person1',
          date: "2021-4-11",
          title: "시카라인 궁금했는데 마침 1+1행사를 해서 득템했어요~",
          desc: " 토너는 당장 사용하려기 보다는 한여름에 피부진정시킬용으로 미리 사두었어요 잘 써볼게요~",
          star: 5,
          pr_name:"브이세븐 크림",
          thumb: "/assets/images/detail_thumb8.png",
        },
        {
          id: 9,
          user: 'abcdef007',
          date: "2021-2-13",
          title: "진짜완전 추천해용",
          desc: " 원래 작은 사이즈 써봤는데 너무 좋아서 큰거 구입합니다 손 건조한편인데 촉촉하고 흡수도 좋아서 잘쓰고있습니당",
          star: 5,
          pr_name:"포어레이디 엠플",
          thumb: "/assets/images/detail_thumb7.png",
        },
        {
          id: 10,
          user: 'superman',
          date: "2021-7-23",
          title: "항상 만족하고 쓰는 닥자입니다.",
          desc: " 몇개째사용하고있어요바른즉시흡수되어찍찍하지않아좋습니다",
          star: 5,
          pr_name:"시카케어 앰플",
          thumb: "/assets/images/detail_thumb4.png",
        },
        
      ]
    }
  );
});

module.exports = router;

