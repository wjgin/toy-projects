#include <stdio.h>

int main_printfscanf(void) // 하나의 소스 코드 아래에 두개 이상의 main이 있을 수 없기에 임시로 바꿔줌
{
	// 정수형 변수 예제
	/*int age = 12;
	printf("%d\n", age);
	age = 13;
	printf("%d\n", age); */

	/*printf("1");
	// printf("2\n");
	printf("3"); */

	// 실수형 변수 예제
	/*float f = 4.5;
	printf("%f\n", f);
	printf("%.2f\n", f); // 소수점 2째짜리 까지 실수를 표시한다. 반올림 된다.

	double d = 4.228; // 또 하나의 실수 표시 방법
	printf("%.2lf\n", d); // 더블을 사용할때는 lf 변수를 준다. 
	printf("%f\n", d); // %f를 변수로 줘봤다 결과를 보자 잘 실행됌 */
	// 정수 서식 문자열 %d를 사용하면 오류가 나온다.

	// 상수 예제
	/*const int YEAR = 1994; // 변하면 안되는 값은 상수로 지정해준다. 아래서 변경할 수 없다. 상수의 경우 대문자로 입력 한다.
	printf("태어난 년도는 %d\n", YEAR);*/

	//printf 예제
	//연산

	/*int add = 10;
	printf(" 3 + 7 = %d\n", add);
	printf(" %d + %d = %d\n", 3, 7, 3 + 7); // 정수를 직접 입력하거나 변수로 지정해도 된다. */

	//scanf
	// 키보드 값을 입력 받아서 저장
	/*int input; // 빈 정수 변수하나 만든다.
	printf("값을 입력하세요.");
	scanf_s(" %d", &input); // 값을 입력하면 input이라는 변수에 값이 들어간다. & 기호를 사용해줘야 한다.
	// 값을 정수로 받아서 실수를 입력해도 내림이 된다.
	printf("입력 값은 : %d", input); //input으로 입력된 값을 출력한다.*/

	/*int one, two, three; // 세개를 한번에 받을 수 있다.
	printf("3개이 정수 값을 입력하세요.");
	scanf_s("%d %d %d", &one, &two, &three); // space로 나누거나 enter로 나눈다. 정수를 입력해야지 오류가 안나온다.
	printf("첫번째 입력 값은: %d\n", one);
	printf("두번째 입력 값은: %d\n", two);
	printf("세번째 입력 값은: %d\n", three); */

	//문자열 예제
	/* char c = 'A'; // 큰 따움표 ""는 안된다. //문자는 한글자를 의미한다.
	printf("%c\n", c);
	// 문자열 : 두글자 이상으로 이뤄진 것.
	char str[256]; // 256글자를 입력 받는 공간을 만든다.
	scanf_s("%s", str, sizeof(str)); //s 서식을 사용하며 str에 문자를 입력한다. 문자 길이를 str의 사이즈 256으로 지정해준다. 오류 방지
	// %s로 값을 받으면 문자열 말고 다른 값이 들어오면 입력 받기가 종료된다. 띄어쓰기 포함
	// %s 대신 %[^\n]를 입력하면 엔터를 제외한 모든 값을 받는다는 의미이다.
	// 문자열 scanf는 &를 안넣어줘도 된다.
	printf("입력한 글은 \n %s", str); */

	// 경찰서 조서 쓰기 프로젝트

	printf("이름이 뭐예요?");
	char name[256];
	scanf_s("%s", name, sizeof(name));
	printf("나이가 몇이예요?");
	int age;
	scanf_s("%d", &age);
	printf("키가 몇이예요?");
	float height;
	scanf_s("%f", &height);

	printf("---조서 내용---\n\n\n");
	printf("이름은 %s\n", name);
	printf("나이는 %d살\n", age);
	printf("키는 %.2fcm\n", height);

	return 0;
}