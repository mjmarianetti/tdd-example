<?php

require_once __DIR__.'/../src/FizzBuzz.php';

use PHPUnit\Framework\TestCase;



class FizzBuzzTest extends TestCase
{	

	public function test1Resolve1()
	{
		$this->assertEquals(1, FizzBuzz::resolve(1));
	}

	public function test2Resolve2()
	{
		$this->assertEquals(2, FizzBuzz::resolve(2));
	}

	public function test3ResolveFizz()
	{
		$this->assertEquals('Fizz', FizzBuzz::resolve(3));
	}

	public function test5ResolveBuzz()
	{
		$this->assertEquals('Buzz', FizzBuzz::resolve(5));
	}

	public function test6ResolveBuzz()
	{
		$this->assertEquals('Fizz', FizzBuzz::resolve(6));
	}

	public function test10ResolveBuzz() {
		$this->assertEquals('Buzz', FizzBuzz::resolve(10));
	}

	public function test15ResolveFizzBuzz() {
		$this->assertEquals('FizzBuzz', FizzBuzz::resolve(15));
	}

}