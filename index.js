// 받아올 데이터 (시,도별 확진자 수, 거리두기 단계, 일일 확진자 수)
var infecteeNum = [2120, 1321, 251, 109, 80, 135, 129, 11, 121, 74, 58, 47, 129, 129, 14, 160, 61, 5];
var distanceLevel = 2;
var DailyInfectee = 7102

// 방문 시각에 맞는 시간을 Date객체와 innerHTMl을 이용하여 동적으로 표시한다.
var now = new Date();
var date = document.getElementById("DateObj");
date.innerHTML = now.getFullYear()+"년도 "+(now.getMonth()+1)+"월 "+now.getDate()+"일 "+now.getHours()+"시"
// 일일 확진자 수를 동적으로 표시해 준다. (위에 데이터 값을 바꾸면 바뀐다.)
var daily = document.getElementById("InfecteeNumObj");
daily.innerHTML = DailyInfectee

// 거리두기 단계를 동적으로 표시해 준다. (위에 데이터 값을 바꾸면 바뀐다.)
var dl = document.getElementById("DLNum");
dl.innerHTML = distanceLevel;

// 입력된 일정의 정보를 저장하는 변수
var scheduleDate; // 날짜
var locationInput; // 장소
var peopleNumInput; // 인원 수
var vaccineInput; // 백신 여부
var symptomsInput; // 증상 유무

// 입력된 정보를 계산하여 위험레벨을 저장할 변수
// 레벨은 1=안전, 2=보통, 3=주의, 4=위험으로 나뉜다.
var dangerLevel = 0;


// 입력값을 매개변수로 받아서 위험 수치를 계산하는 함수
// infectnum은 감염자수, peopnum은 인원수, vac은 백신접종여부(true/false), 
// dislevel은 거리두기단계, symp는 증상 textarea가 비어있으면 0, 채워지면 20
function CalDValue (infectnum, peopnum, vac, dislevel, symp) {
  var calresult = 0;
  var sympValue = 0;
  var vacValue = 0;
  if (symp == false){
    sympValue = 0;
  }
  else {
    sympValue = 20;
  }
  if (vac == true ){
    vacValue = 1;
  }
  else {
    vacValue = 10;
  }
  // 위험도 계산식
  calresult = (infectnum + peopnum + sympValue) * vacValue * dislevel;

  return calresult;
}

// 계산된 위험수치를 4단계로 나눠 위험레벨을 1~4까지에서 정함
function CalDLevel(cal) {
  
  if ( 0 <= cal && cal < 200) {
    dangerLevel = 1;
  }
  else if ( 200 <= cal && cal < 2000 ) {
    dangerLevel = 2;
  }
  else if ( 2000 <= cal && cal < 3000 ) {
    dangerLevel = 3;
  }
  else if ( 3000 < cal ) {
    dangerLevel = 4;
  }
}

// 지역을 매개변수로 받아 배열에 저장된 감염자수를 반환
function GetinfecteeNum(location) {
  var result;
  switch(location) {
    case "서울":
      result = infecteeNum[0];
      break;
    case "경기":
      result = infecteeNum[1];
      break;
    case "인천":
      result = infecteeNum[2];
      break;
    case "강원":
      result = infecteeNum[3];
      break;
    case "충북":
      result = infecteeNum[4];
      break;
    case "충남":
      result = infecteeNum[5];
      break;
    case "경북":
      result = infecteeNum[6];
      break;
    case "세종":
      result = infecteeNum[7];
      break;
    case "대전":
      result = infecteeNum[8];
      break;
    case "전북":
      result = infecteeNum[9];
      break;
    case "전남":
      result = infecteeNum[10];
      break;
    case "광주":
      result = infecteeNum[11];
      break;
    case "경남":
      result = infecteeNum[12];
      break;
    case "대구":
      result = infecteeNum[13];
      break;
    case "울산":
      result = infecteeNum[14];
      break;
    case "부산":
      result = infecteeNum[15];
      break;
    case "제주":
      result = infecteeNum[16];
      break;
    case "해외":
      result = infecteeNum[17];
      break;
    default:
      result = 0;
  }
  return result;
}

// 지역 입력 값을 inform.html에 넘길 때 한글은 그래도 출력되지 않아 일치하는 숫자로 바꿔 보내준다.
function locationNum(location) {
  var result;
  switch(location) {
    case "서울":
      result = 0;
      break;
    case "경기":
      result = 1;
      break;
    case "인천":
      result = 2;
      break;
    case "강원":
      result = 3;
      break;
    case "충북":
      result = 4;
      break;
    case "충남":
      result = 5;
      break;
    case "경북":
      result = 6;
      break;
    case "세종":
      result = 7;
      break;
    case "대전":
      result = 8;
      break;
    case "전북":
      result = 9;
      break;
    case "전남":
      result = 10;
      break;
    case "광주":
      result = 11;
      break;
    case "경남":
      result = 12;
      break;
    case "대구":
      result = 13;
      break;
    case "울산":
      result = 14;
      break;
    case "부산":
      result = 15;
      break;
    case "제주":
      result = 16;
      break;
    case "해외":
      result = 17;
      break;
    default:
      result = 18;
  }
  return result;
}

// 입력한 데이터 받아오기
function GetInputs(e) {
  e.preventDefault(); // 버튼 이벤트가 발생되면 페이지를 refresh하지 못하게 막음
  scheduleDate = document.getElementById("ScheduleDate").value;
  locationInput = document.getElementById("ScheduleLocate").value;
  peopleNumInput = document.getElementById("PeopleNum").value * 1;
  // 입력값은 문자이므로 1을 곱해 정수로 바꿔준다.
  vaccineInput = document.getElementById("Vaccine").checked;
  symptomsInput = document.getElementById("Symptoms").value;
  // 증상은 입력된게 없으면 false로, 입력된 게 있으면 true로 저장한다.
  if (symptomsInput == ""){
    symptomsInput = false
  }
  else {
    symptomsInput = true
  }

  var infectee = GetinfecteeNum(locationInput)
  // 지역에 따른 확진자 수를 저장
  
  var DV = CalDValue(infectee, peopleNumInput, vaccineInput, distanceLevel, symptomsInput)
  // 계산 함수를 호출하여 위험수치를 계산한다.
  
  CalDLevel(DV)
  // 레벨 함수를 호출하여 수치에 해당하는 레벨을 정한다.

  PrintDL(dangerLevel)
  // 위험 레벨을 동적으로 출력해 주는 함수
}

// 위험 레벨을 동적으로 출력해 주는 함수. 
// 위험 레벨에 따라 글자와 색이 바뀐다.
function PrintDL(level) {
  var dltext = document.getElementById("DLText");
  switch(level) {
    case 1:
      dltext.innerHTML = "안정";
      dltext.style.color = "green";
      break;
    case 2:
      dltext.innerHTML = "보통";
      dltext.style.color = "yellow";
      break;
    case 3:
      dltext.innerHTML = "주의";
      dltext.style.color = "orange";
      break;
    case 4:
      dltext.innerHTML = "위험";
      dltext.style.color = "red";
      break;
    default:
      break;
  }
}

// 위험 레벨을 나타내는 글자를 클릭하면 inform.html을 팝업으로 띄워주고
// 입력된 값들을 url형식으로 보내준다
function OpenInform() {
  locationInputNum = locationNum(locationInput)
  window.open("inform.html?" + distanceLevel + ":" + scheduleDate + ":" + locationInputNum + ":" + peopleNumInput + ":" + vaccineInput + ":" + dangerLevel + ":" + symptomsInput, "mywin" ,"left=20,top=20,width=1000,height=600");
  // 여는 팝업의 url과 위치, 크기가 주어진다.
}