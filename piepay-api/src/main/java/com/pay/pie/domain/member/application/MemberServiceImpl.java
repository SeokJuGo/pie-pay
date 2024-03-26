package com.pay.pie.domain.member.application;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pay.pie.domain.member.dao.MemberRepository;
import com.pay.pie.domain.member.dto.UpdateMemberRequest;
import com.pay.pie.domain.member.entity.Member;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

	private final MemberRepository memberRepository;

	@Override
	@Transactional
	public Member save(Member member) {
		return memberRepository.save(member);
	}

	@Override
	public Optional<Member> findByEmail(String email) {
		return memberRepository.findByEmail(email);
	}

	@Transactional
	public Member updateMember(long memberId, UpdateMemberRequest request) {
		Member member = memberRepository.findById(memberId)
			.orElseThrow(() -> new IllegalArgumentException("not found: " + memberId));
		member.updateMember(request);

		return member;
	}
}
