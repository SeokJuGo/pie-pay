package com.pay.pie.domain.member.application;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.pay.pie.domain.account.repository.AccountRepository;
import com.pay.pie.domain.member.dao.MemberRepository;
import com.pay.pie.domain.member.dto.UpdateMemberRequest;
import com.pay.pie.domain.member.dto.response.MemberDetailResponse;
import com.pay.pie.domain.member.entity.Member;
import com.pay.pie.domain.member.exception.MemberException;
import com.pay.pie.domain.member.exception.MemberExceptionCode;
import com.pay.pie.global.util.S3Util;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

	private final MemberRepository memberRepository;
	private final AccountRepository accountRepository;
	private final S3Util s3Util;

	@Override
	@Transactional
	public Member save(Member member) {
		return memberRepository.save(member);
	}

	@Override
	public MemberDetailResponse getMemberDetail(Long memberId) {

		return MemberDetailResponse.of(memberRepository.findById(memberId)
			.orElseThrow(() -> new MemberException(MemberExceptionCode.NOT_FOUND_MEMBER)));
	}

	@Override
	@Transactional
	public MemberDetailResponse updateMemberDetail(Long memberId, UpdateMemberRequest request) {
		Member findMember = memberRepository.findById(memberId)
			.orElseThrow(() -> new MemberException(MemberExceptionCode.NOT_FOUND_MEMBER));

		findMember.updateMember(request);
		return MemberDetailResponse.of(findMember);
	}

	@Override
	public Optional<Member> findMemberByEmail(String email) {
		return memberRepository.findByEmail(email);
	}

	@Override
	public Member findMemberById(Long id) {
		return memberRepository.findById(id)
			.orElseThrow(() -> new MemberException(MemberExceptionCode.NOT_FOUND_MEMBER));
	}

	@Override
	@Transactional
	public MemberDetailResponse updateMemberProfileImage(MultipartFile image, Long memberId) {

		Member findMember = memberRepository.findById(memberId)
			.orElseThrow(() -> new MemberException(MemberExceptionCode.NOT_FOUND_MEMBER));

		// s3 업로드 요청 후 저장 Url
		String s3Url = s3Util.upload(image);

		findMember.updateMemberProfileImage(s3Url);

		return MemberDetailResponse.of(findMember);
	}
}
