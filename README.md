# React Exercises
___

### How to use?

To change between exercises just checkout to the exercise git branch:

`git checkout exercise-1`

Instructions will be shown at this README.md file.

__

To see the solution checkout to the solution branch with the same id:

`git checkout solution-1`

___

### Exercise 3: Real time sum with configurable number of counters

Know you have to make a Real time sum but with a configurable number of counters.

The Counter component is separated and it triggers two functions:

1. onAdd when adding (this.props.onAdd() to call it)
2. onSubstract on substracting (this.props.onSubstract() to call it)

Where do you have to call them?

Extra points 1: Counter state can be managed by its parent component, so convert it
to a functional component.

Extra points 2: Pass the number of arrays as a prop to the RealTimeSum component.
