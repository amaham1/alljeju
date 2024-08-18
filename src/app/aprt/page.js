
import { aprtWaitTime } from "../api/aprtApi"

export default async function AprtHome() {
    const aprtWaitTimeData = await aprtWaitTime();

    return (
        <div>
            <p>aprt</p>
            <section>
                <p>국내선 구간별 평균 소요시간</p>
                <p>1구간 평균 소요시간 = {calcWaitTime(aprtWaitTimeData.data[0].STY_TCT_AVG_A)} 분</p>
                <p>2구간 평균 소요시간 = {calcWaitTime(aprtWaitTimeData.data[0].STY_TCT_AVG_B)}분</p>
                <p>3구간 평균 소요시간 = {calcWaitTime(aprtWaitTimeData.data[0].STY_TCT_AVG_C)}분</p>
                <p>4구간 평균 소요시간 = {calcWaitTime(aprtWaitTimeData.data[0].STY_TCT_AVG_D)}분</p>
                <p>전체 평균 소요시간 = {calcWaitTime(aprtWaitTimeData.data[0].STY_TCT_AVG_ALL)}분</p>
                <p>1구간은 체크인-신분확인 2구간은 신분확인-보안검색 3구간은 보안검색-항공기 탑승 4구간은 항공기탑승-항공기 출발</p>
            </section>
        </div>
    )
}

function calcWaitTime(time) {
    return Math.round(time / 60);
}