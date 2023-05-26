numero= ''

def converter (n):
    qtd= len(str(n))

    if qtd>=4:
        val= n//1000
        romano= val*'M'
        n=n- val*1000
    
    qtd= len(str(numero))
    if qtd==3:
        if n//900==1:
            val= n//900
            romano+='CM'
            n=n-val*900
        if n//500==1:
            val=n//500
            romano+='D'
            n=n-val*500
        if n//400==1:
            val==n//400
            romano+='CD'
            n=n-val*400
       
    


        

