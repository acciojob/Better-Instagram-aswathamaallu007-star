//your code here
const allimage = document.querySelectorAll('.image')
let draggedimage = null
allimage.forEach(image =>{
	image.addEventListener('dragstart',(e)=>{
		draggedimage = e.target;
		e.target.classList.add('dragging')
		e.dataTransfer.setData('img',e.target.id)
		
	});
	  image.addEventListener('dragend', (e) => {
          e.target.classList.remove('dragging');
        });
	
	image.addEventListener('dragover',(e)=>{
		e.preventDefault();
	});
	image.addEventListener('drop',(e)=>{
		e.preventDefault();
		if(draggedimage && draggedimage != e.target){
			const parent = document.getElementById('parent')
			parent.insertBefore(draggedimage, e.target)
		}
	})
})
 
