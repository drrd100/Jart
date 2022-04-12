const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(
    {
      product: [
        {
          id: 0,
          desc: '#남자의 스킨케어를 한 번에 끝내주는',
          name: "포맨 스킨 에센스",
          sale_price: 17600,
          price:22000,
          imageURL:"/assets/images/jart-item14.png",
          detail_image_thumb:"/assets/images/detail_thumb14.png",
          category: "new",
        },
        {
          id: 1,
          desc: "#초록의 기적",
          name: "시카페어 보습크림",
          sale_price:79900,
          price:90000,
          imageURL: "/assets/images/jart-item1.png",
          detail_image_thumb:"/assets/images/detail_thumb1.png",
          category: "best"
          
        },
        {
          id: 2,
          desc: "#보습장벽쫀쫀",
          name: "세라마이딘 아이크림",
          sale_price:15900,
          price:30000,
          imageURL:"/assets/images/jart-item2.png",
          detail_image_thumb:"/assets/images/detail_thumb2.png",
          category: "best"
        },
        {
          id: 3,
          desc: '#보습장벽크림',
          name: "세라마이딘 보습크림",
          sale_price: 30000,
          price:40000,
          imageURL:"/assets/images/jart-item3.png",
          detail_image_thumb:"/assets/images/detail_thumb3.png",
          category: "best"
        },
         {
          id: 4,
          desc: '#초록의 힘',
          name: "시카 에센스&그린샷",
          sale_price: 39000,
          price:50000,
          imageURL:"/assets/images/jart-item4.png",
          detail_image_thumb:"/assets/images/detail_thumb4.png",
          category: "best"
        },
          {
          id: 5,
          desc: '#천연코튼 패드',
          name: "더마 코튼 패드 세트",
          sale_price: 10900,
          price:20000,
          imageURL:"/assets/images/jart-item5.png",
          detail_image_thumb:"/assets/images/detail_thumb5.png",
          category: "best"
        },
           {
          id: 6,
          desc: '#모공타파마스크',
          name: "더마스크 포어레미디™ 퓨리파잉 머드 마스크",
          sale_price: 20800,
          price:26000,
          imageURL:"/assets/images/jart-item6.png",
          detail_image_thumb:"/assets/images/detail_thumb6.png",
          category: "new"
        },
        {
          id: 7,
          desc: '#민트파하세럼',
          name: "포어레미디™ 파하 익스폴리에이팅 세럼",
          sale_price: 35200,
          price:44000,
          imageURL:"/assets/images/jart-item7.png",
          detail_image_thumb:"/assets/images/detail_thumb7.png",
          category: "new"
        },
        {
          id: 8,
          desc: '#비타톤업크림',
          name: "브이세븐 토닝 라이트",
          sale_price: 40000,
          price:50000,
          imageURL:"/assets/images/jart-item8.png",
          detail_image_thumb:"/assets/images/detail_thumb8.png",
          category: "new"
        },
        {
          id: 9,
          desc: '#수분고무마스크',
          name: "크라이오 러버 위드 모이스처라이징 히알루론산",
          sale_price: 11200,
          price:14000,
          imageURL:"/assets/images/jart-item9.png",
          detail_image_thumb:"/assets/images/detail_thumb9.png",
          category: "new"
        },
        {
          id: 10,
          desc: '#진정고무마스크',
          name: "크라이오 러버 위드 수딩 알란토인",
          sale_price: 11200,
          price:14000,
          imageURL:"/assets/images/jart-item10.png",
          detail_image_thumb:"/assets/images/detail_thumb10.png",
          category: "new"
        },
        {
          id: 11,
          desc: '#탄력고무마스크',
          name: "크라이오 러버 위드 퍼밍 콜라겐",
          sale_price: 11200,
          price:14000,
          imageURL:"/assets/images/jart-item11.png",
          detail_image_thumb:"/assets/images/detail_thumb11.png",
          category: "new"
        },
        {
          id: 12,
          desc: '#톤업고무마스크',
          name: "크라이오 러버 위드 브라이트닝 비타민C",
          sale_price: 11200,
          price:14000,
          imageURL:"/assets/images/jart-item12.png",
          detail_image_thumb:"/assets/images/detail_thumb12.png",
          category: "new"
        },
        {
          id: 13,
          desc: '#비타토닝세럼',
          name: "바이옴 브이세븐 세럼",
          sale_price: 11200,
          price:14000,
          imageURL:"/assets/images/jart-item13.png",
          detail_image_thumb:"/assets/images/detail_thumb13.png",
          category: "new"
        },
        
      ]
    }
  );
});

module.exports = router;

