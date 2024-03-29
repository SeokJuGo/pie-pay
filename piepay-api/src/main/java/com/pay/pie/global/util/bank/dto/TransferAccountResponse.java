package com.pay.pie.global.util.bank.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;

@Getter
public class TransferAccountResponse {

	@JsonProperty("Header")
	private Header Header;
	@JsonProperty("REC")
	private Account account;
}
