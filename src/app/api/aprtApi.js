export async function aprtWaitTime() {
    //   "IATA_APCD": "description": "IATA공항코드" //   "PRC_HR": "description": "처리시간"
    //   "OPR_STS_CD": "description": "운영상태코드(0:운영중 , 1 : 비 운영중)"
    //   "STY_TCT_AVG_A": "1구간 소요시간(체류시간) 평균 (단위 : 초)"
    //   "STY_TCT_AVG_B": "2구간 소요시간(체류시간) 평균 (단위 : 초)" //   "STY_TCT_AVG_C": "3구간 소요시간(체류시간) 평균 (단위 : 초)"
    //   "STY_TCT_AVG_D": "4구간 소요시간(체류시간) 평균 (단위 : 초)" //   "STY_TCT_AVG_ALL": "총 소요시간(체류시간) 평균 (단위 : 초)"
    const res = await fetch('https://api.odcloud.kr/api/getAPRTWaitTime/v1/aprtWaitTime?page=1&perPage=10&cond%5BIATA_APCD%3A%3AEQ%5D=CJU&serviceKey=LtXmZ8ILA115JsYkYujTf%2F34o5FvNXJVGy%2FXgmUR5RekNLwM46cKLBSbkYI9lIyoamXSlplQj4x0095Ga7rYRQ%3D%3D');
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
}