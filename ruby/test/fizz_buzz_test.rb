require_relative "../src/fizzbuzz"
require "test/unit"
 
class FizzBuzzTest < Test::Unit::TestCase
 
  def test_simple
    assert_equal(1, FizzBuzz.resolve(1) )
    assert_equal(2, FizzBuzz.resolve(2) )
    assert_equal("Fizz", FizzBuzz.resolve(3) )
    assert_equal("Buzz", FizzBuzz.resolve(5) )
    assert_equal("Fizz", FizzBuzz.resolve(6) )
    assert_equal("Buzz", FizzBuzz.resolve(10) )
    assert_equal("FizzBuzz", FizzBuzz.resolve(15) )    
  end
 
end