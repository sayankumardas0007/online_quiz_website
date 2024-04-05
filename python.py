


def ans(k):
    if(k==1):
        f=open("q1a.txt","rt")

    elif(k==2):
        f=open("q2a.txt","rt")

    elif(k==3):
        f=open("q3a.txt","rt")

    elif(k==4):
        f=open("q4a.txt","rt")

    totalmask=0

    u=open("userans.txt","rt")

    for i in range(10):
        a=f.read()
        b=u.read()
        if(a==b):
            totalmask=totalmask+1

    return totalmask



