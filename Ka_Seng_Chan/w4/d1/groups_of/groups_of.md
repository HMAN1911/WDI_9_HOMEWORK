# in groups of

write a program in ruby that randomly organize a list of things into groups

1. prompts the user for a list of things and store them inside an array
2. prompts the user for a group size
3. randomly assign things into groups with size given
4. print out the groups in whatever way you like

```
enter a list:
bart,homer,lisa,maggie
enter group size:
2

[['bart','lisa'],['maggie','homer']]
```

if there are left overs with the given group size just assign them to the last group

```
enter a list:
bart,homer,lisa,maggie,ned
enter group size:
2

[['bart','lisa'],['ned','homer','maggie']]
```
