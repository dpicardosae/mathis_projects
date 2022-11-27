from matplotlib import pyplot as plt
import math

x_list = []
y_list = []
y_sqrt = []
y2_list = []

n = 30

sum = 0

for i in range(1, int(n+1)):
	x_list.append(i)
	sum += 1./i
	y_list.append(sum)
	y_sqrt.append(math.sqrt(i/10.))
	y2_list.append(1.0-math.pow((i-1.0)/i, i))

plt.plot(x_list, y2_list)
plt.show()
