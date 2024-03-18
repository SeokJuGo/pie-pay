package com.pay.pie.global.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.pay.pie.global.common.code.ErrorCode;
import com.pay.pie.global.common.ErrorResponse;

@RestControllerAdvice
public class GlobalControllerAdvice {

	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleCustomBaseExceptionHandler(GlobalException ex) {
		ErrorCode errorCode = ex.getErrorCode();
		ErrorResponse errorResponse = ErrorResponse.of()
			.code(errorCode).build();
		return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(errorCode.getStatus()));
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorResponse> handleMethodValidation(MethodArgumentNotValidException ex) {
		ErrorResponse errorResponse = ErrorResponse.of()
			.code(ErrorCode.NOT_VALID_ERROR)
			.message(ex.getMessage())
			.build();
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}
}