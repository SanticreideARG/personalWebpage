def puzzle (N):
    A = 1
    B = 1
    C = 1
    D = 1
    i = 1
    while (i <= N):
      X = D + 2 * C + 3 * B + 4 * A
      i = i+1
      A = B
      B = C
      C = D
      D = X
    
    print(D)
    result = D % 10000000000
    return result 

resultado = puzzle(pow(2022, 100))
print(resultado)

    # // (últimos 10 dígitos de D)
    
    
    # print puzzle(10)
    
    # print puzzle(100)
    
    # print puzzle(pow(2022, 100)) 
    # // 2022 elevado a la 100
    # (los puntos son para identación)
    
    # ====== Output ======
    
    # 30520
    
    # 720820623
    
    # ???