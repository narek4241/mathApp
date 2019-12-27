# from jsmin import jsmin
# import os
print("Will only compile")

# main js
filename = '../..' '/app.min.js'
new_file = open(filename, 'w')

# modules
file1 = open('../js/modules' +'/answers.js', 'r')
new_file.write(file1.read())
print("1 js is written")

file2 = open('../js/modules' +'/back-to-top.js', 'r')
new_file.write(file2.read())
print("2 js is written")

file3 = open('../js/modules' +'/check-answers.js', 'r')
new_file.write(file3.read())
print("3 js is written")

file4 = open('../js/modules' +'/result-table.js', 'r')
new_file.write(file4.read())
print("4 js is written")

file5 = open('../js/modules' +'/select.js', 'r')
new_file.write(file5.read())
print("5 js is written")

file6 = open('../js/modules' +'/task-iframe.js', 'r')
new_file.write(file6.read())
print("6 js is written")

file7 = open('../js/modules' +'/timer.js', 'r')
new_file.write(file7.read())
print("7 js is written")

new_file.close()




