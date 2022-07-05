def EuclidOpen(a, b):
    if(b==0):
        a=0
    else:
        x2 = 1
        x1 = 0 
        y2 = 0
        y1 = 1
        i=0
        while(b>0):
            i+=1
            q=a//b
            r=a%b
            doan1= "Bước {0}: Lấy a={1} chia cho b={2} được thương là q={3} dư r={4};".format(i,a,b,q,r)
            x=x2 - q*x1
            y=y2 - q*y1
            a=b
            b=r
            x2=x1
            x1=x
            y2=y1
            y1=y
            doan2=" x=x2 - q.x1={0}, y=y2 - q.y1={1}; a=b={2}; b=r={3}; x2=x1={4}, x1=x={5}, y2=y1={6}, y1=y={7}".format(x,y,b,r,x1,x,y1,y)
            print(doan1 + doan2)
def table(a,b):
    if(b==0):
        a=0
    else:
        x2 = 1
        x1 = 0 
        y2 = 0
        y1 = 1
        i=0
        print("Q r x y a b x2 x1 y2 y1")
        print("{0} {1} {2} {3} {4} {5} {6} {7} {8} {9} {10}".format("-","-","-","-",a,b,x2,x1,y2,y1))
        while(b>0):
            i+=1
            q=a//b
            r=a%b
            x=x2 - q*x1
            y=y2 - q*y1
            a=b
            b=r
            x2=x1
            x1=x
            y2=y1
            y1=y
            print("{0} {1} {2} {3} {4} {5} {6} {7} {8} {9}".format(q,r,x,y,a,b,x2,x1,y2,y1))
a = int(input("Nhập a: "))
b = int(input("Nhập b: "))
EuclidOpen(a,b)
print("Xuất bảng")
table(a,b)