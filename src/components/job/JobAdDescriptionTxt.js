import styled from "styled-components"

const JobAdDescriptionTxt = () => {
    return (
        <DescriptionTxt>
            <p className="desc">
                '우리는 왜 이 일을 해야 할까?' 라는 기본적인 물음에서 시작을 합니다.<br />
                당연히 힘든 일도 어려운 일도 있지만 함께할 수 있는, 지식을 나눌 수 있는 도전적인 동료들과 새로운 분야를 개척하고 싶습니다. <br />
                함께 하는 시간이 가치가 있고, 서로 도움이 되고 마지막으로 그 시간이 즐거울 수 있는 그런 동료들을 찾습니다.
            </p>

            <h5 className="tit">주요업무</h5>
            <p className="desc">• 마카롱택시 백엔드 서버 운영 및 신규 서비스 기능 개발</p>

            <h5 className="tit">자격요건</h5>
            <p className="desc">
                • 해당 경력 10년 이상, 또는 상응하는 개발 경험이 있으신 분<br />
                • Java, Spring, Spring Boot, Mybatis, JPA, JSP, Gradle, Maven, Redis, AWS Aurora MySQL, AWS SQS 경험이 있으신 분<br />
                • Restful API에 대한 전반적인 이해 및 실무활용 능력이 있으신 분<br />
                • Agile Practice 경험이 있으신 분<br />
                • MSA, SOA 기반 백엔드 개발 경험이 있으신 분<br />
                • 오픈소스 라이브러리 실무 활용 능력이 있으신 분 <br />
                • 개발팀 리딩 경험이 있으신 분
            </p>

            <h5 className="tit">우대사항</h5>
            <p className="desc">
                • 위치기반 서비스 개발 경험이 있으신 분<br />
                • 레거시 시스템 개선 경험 및 운영 경험이 있는 분<br />
                • AWS, Kubernetes 환경에서 실행되는 다양한 서비스 운영과 관리 경험이 있으신 분 <br />
                • CI/CD 환경을 구성 및 운영해보신 분<br />
                • 코드리뷰를 통해 주변 동료에게 자극을 주시는 분<br />
                • 원활한 커뮤니케이션 능력을 갖추신 분 <br />
                • 새로운 기술에 관심이 많고 배움에 적극적이신 분
            </p>

            <h5 className="tit">혜택 및 복지</h5>
            <p className="desc">
                [일에 집중할 수 밖에 없게 만드는 최고의 혜택]<br />
                • 커피 사드실 필요 없어요! (최고급 에스프레소 머신과 원두 구비)<br />
                • 일은 하시더라도 저녁은 꼭 챙겨드세요! (오후 7시 ~ 12시 사이 야근 식대 지원)<br />
                • 야근하시느라 고생 많으셨네요. 고생하신 당신의 안전한 귀가를 위해<br />
                업무 택시 지원해드려요! (마카롱 택시 앱내 호출 가능)
            </p>
        </DescriptionTxt>
    )
}

const DescriptionTxt = styled.div`
    margin-bottom: 60px;
    padding-right: 20px;
    .desc {font-size: 16px; line-height: 1.75;}
    .tit {font-size:16px; line-height:1.75; margin: 20px 0 0; font-weight: 600;}
`;

export default JobAdDescriptionTxt