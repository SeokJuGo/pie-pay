# 베이스 이미지로 OpenJDK 17 이미지를 사용
FROM amazoncorretto:17
# 8081 포트로 매핑
EXPOSE 8081
# 변수 선언
ARG JAR_FILE=build/libs/*.jar
# 호스트의 빌드 파일을 Docker 이미지 내로 복사
COPY ${JAR_FILE} piepay-api.jar
# jar 파일을 실행하는 명령을 설정
ENTRYPOINT ["java", "-jar", "/piepay-api.jar"]
