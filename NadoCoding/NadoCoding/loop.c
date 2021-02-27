# include <stdio.h>

int main_loop(void) {
	
	//int a = 1;
	//printf("a = %d\n", a);
	//printf("a = %d\n", ++a); // ++a는 문장 전에 +1을 해준다.
	//printf("a = %d\n", a++); // a++은 문장을 마친 후 +1을 해준다.
	//
	//int b = 1;
	//printf("Hello World %d\n", b++);
	//printf("Hello World %d\n", b++);
	//printf("Hello World %d\n", b++);
	//printf("Hello World %d\n", b++);
	//printf("Hello World %d\n", b++);
	//printf("Hello World %d\n", b++);
	//printf("Hello World %d\n", b++);
	//printf("Hello World %d\n", b++);
	//printf("Hello World %d\n", b++);

	// 반복분 for, while do while
	// for (선언; 조건; 증감;){ }
	/*for (int i = 1; i <= 10; i++) {
	
		printf("Hello World %d\n", i);
	}*/

	// while (조건) { }
	//int i = 1;
	//while (i <= 10) {
	//	printf("Hello World %d\n", i++);
	//	// i++ 밖에 써줘도 됌
	//}

	// do { } while (조건)
	/*int i = 1;
	do {
		printf("Hello World %d\n", i++);
	} while (i <= 10);*/

	// 이중 반복문으로 구구단 만들기
	/*for (int i = 2; i <= 9; i++)
	{
		printf("%d 단\n", i);
		for (int j = 1; j <= 9; j++)
		{
			printf("  %d X %d = %d\n", i, j, i * j);
		}
	}*/
	
	// 이중 반복문 활용 별 만들기
	/*for (int i = 0; i < 5; i++)
	{
	 	for (int j = 0; j <= i; j++)
		{
			printf("*");
		}
		printf("\n");
	}*/

	// 거꾸로 별 만들기
	//for (int i = 0; i < 5; i++)
	//{
	//	for (int j = i; j < 5 - 1; j++)
	//	{
	//		printf(" ");
	//	}
	//	for (int k = 0; k <= i; k++)
	//	{
	//		printf("*");
	//	}
	//	printf("\n");
	//}

	// 피라미드 만들기 프로젝트
		printf("몇 층을 쌓겠습니까?\n");
		int floor;
		scanf_s("%d", &floor);

		for (int i = 0; i < floor; i++)
		{
			for (int j = i; j < floor - 1; j++)
			{
				printf(" ");
			}
			for (int k = 0; k < 2 * i + 1; k++)
			{
				printf("*");
			}
			printf("\n");
		}

	return 0;

}