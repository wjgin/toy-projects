# include <stdio.h>

int main(void)
{
	// 조건문 
	// if (조건) { 내용 } / else if / else
	
	//int age;
	//printf("당신은 몇 살 입니까?");
	//scanf_s("%d", &age);
	//
	//if (age < 8) 
	//{
	//	printf("어린이 입니다.");
	//}

	//else if (age >= 8 && age < 13)
	//{
	//	printf("초등학생 입니다.");
	//}
	//
	//else if (age >= 14 && age < 17)
	//{
	//	printf("중학생 입니다.");
	//}

	//else if (age >= 17 && age < 20)
	//{
	//	printf("고등학생 입니다.");
	//}

	//else
	//{
	//	printf("성인 입니다.");
	//}
	
	for (int i = 1; i <= 10; i++)
	{
		if (i >= 6 && i <= 10)
		{
			if (i == 7)
			{
				printf("%d번 학생은 결석 입니다.\n", i);
				continue; //break은 loof를 벗어남 //continue는 건너띄고 다음으로
			}
			printf("%d번 학생은 발표하세요.\n", i);

		}
	}
	return 0;
}
