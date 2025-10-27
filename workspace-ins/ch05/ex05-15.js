const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 7 //지도의 레벨(확대, 축소 정도)
};

const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

navigator.geolocation.getCurrentPosition(success, fail);

function success(position){
  console.log(position);
  const here = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude); // 위도, 경도
  const accuracy = position.coords.accuracy; // 위경도 오차
  addMarker(here, accuracy);
  map.setCenter(here);
}

function fail(error){
  console.error(error);
};

function addMarker(here, accuracy){

  const imageSrc = 'https://k.kakaocdn.net/14/dn/btsLQlC2oIa/AJTcGsdoGAtLPaS4GM7OvK/o.jpg'; // 마커이미지의 주소입니다
  const imageSize = new kakao.maps.Size(32, 32); // 마커이미지의 크기입니다
  const imageOption = {offset: new kakao.maps.Point(8, 28)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: here,
    title: '용쌤',
    image: markerImage
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // 지도에 표시할 원을 생성합니다
  var circle = new kakao.maps.Circle({
    center : here,  // 원의 중심좌표 입니다 
    radius: accuracy, // 미터 단위의 원의 반지름입니다 
    strokeWeight: 2, // 선의 두께입니다 
    strokeColor: '#75B8FA', // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'dashed', // 선의 스타일 입니다
    fillColor: '#CFE7FF', // 채우기 색깔입니다
    fillOpacity: 0.5  // 채우기 불투명도 입니다   
  });

  // 지도에 원을 표시합니다 
  circle.setMap(map); 
}