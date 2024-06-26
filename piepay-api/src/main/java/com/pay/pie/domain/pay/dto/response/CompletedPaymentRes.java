package com.pay.pie.domain.pay.dto.response;

import java.util.List;

import com.pay.pie.domain.order.dto.OrderDto;
import com.pay.pie.domain.order.entity.Order;
import com.pay.pie.domain.participant.dto.ParticipantInfoDto;
import com.pay.pie.domain.pay.entity.Pay;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class CompletedPaymentRes {

	private final Long payId;
	private Pay.PayStatus payStatus;
	private final OrderDto orderInfo;
	private final List<ParticipantInfoDto> participants;

	public static CompletedPaymentRes of(Pay pay, Order order, List<ParticipantInfoDto> participants) {
		return CompletedPaymentRes.builder()
			.payId(pay.getId())
			.payStatus(pay.getPayStatus())
			.orderInfo(OrderDto.of(order))
			.participants(participants)
			.build();
	}

}
