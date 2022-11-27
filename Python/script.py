from matplotlib import pyplot as plt
import math

x_list = []
y_list = []
y2_list = []

n = 10.0

sum = 0

for i in range(1, int(n+1)):
	x_list.append(i)
	sum += 1/i
	y_list.append(sum)
	y2_list.append(1.0-math.pow((n-1.0)/n, n))

plt.plot(x_list, y2_list)
print(y2_list)
plt.show()