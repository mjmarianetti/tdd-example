class FizzBuzz 
    
    def self.resolve(num) 
            if (num % 3 === 0 && num % 5 === 0) 
                return 'FizzBuzz';
            end    
            
            if (num % 3 === 0) 
                return 'Fizz';
            end

            if (num % 5 === 0) 
                return 'Buzz';
            end
            
            return num;        
    end

end