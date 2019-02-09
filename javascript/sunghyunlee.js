/*
Sunghyun Lee
*/

function countItems(arr, item)
{
	var n=0;
	var arrayLength = arr.length;
	var i=0;
	for (; i<arrayLength; i++)
	{
		if (arr[i] == item)
		{
			n++;
		}
		else if(Array.isArray(arr[i]))
		{	
			n=n+countItems(arr[i], item);
		}
	}
	return n;
}