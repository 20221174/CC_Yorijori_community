요리조리 - 마이크로서비스 아키텍처 전환 및 클라우드 배포  
=================================================================

프로젝트 소개  
-------------
기존 모놀리식 커뮤니티 서비스를 도메인별 마이크로서비스로 분리하고, 컨테이너화 및 Google Cloud Platform(GCP) 기반 쿠버네티스 클러스터로 배포한 프로젝트입니다. 이 과정을 통해 서비스의 유연성, 확장성, 가용성을 대폭 향상시켰습니다.

데모 영상  
----------
[YouTube 데모 영상 바로가기](https://www.youtube.com/watch?v=6EEnCYzOCvE)

역할 및 팀 구성  
---------------
- 역할: DevOps 엔지니어 / 백엔드 개발자
- 개발 기간: 2025.03 ~ 2025.06
- 팀 구성: 3명 (총 7명 프로젝트 중 마이크로서비스 전환 담당팀)

주요 기술적 구현사항  
-------------------
- 아키텍처 설계: 기존 모놀리식 서비스를 도메인별 4개 마이크로서비스로 분리
- API 개발: RESTful API 설계 및 서비스 간 통신 인터페이스 구현
- 컨테이너화: Multi-stage Docker 빌드를 통한 최적화된 이미지 생성
- 오케스트레이션: Kubernetes Deployment, Service, Ingress 리소스 구성
- CI/CD: GitHub Actions 기반 자동화된 빌드 및 배포 파이프라인 구축

기술 스택  
---------
- Backend: Node.js, Express.js
- Container: Docker, Docker Compose
- Orchestration: Kubernetes (GKE)
- Cloud: Google Cloud Platform (GCP)
- Version Control: Git, GitHub
