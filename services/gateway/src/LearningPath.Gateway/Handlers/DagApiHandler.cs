using LearningPath.Gateway.Client.Dag.Model;
using Microsoft.AspNetCore.Mvc;

namespace LearningPath.Gateway.Handlers
{
	public interface IDagApiHandler
	{
		public Task<IActionResult> DagGet(int dagid);
	}

	public class DagApiHandler : IDagApiHandler
	{
		public Task<IActionResult> DagGet(int dagid)
		{
			var dagData = new DagData
			{
				Elements = new List<DagElement>
				{
					new DagElement { Data = new DagElementData { Id = "start", Label = "Start" } },
					new DagElement { Data = new DagElementData { Id = "a", Label = "Step A" } },
					new DagElement { Data = new DagElementData { Id = "b", Label = "Step B" } },
					new DagElement { Data = new DagElementData { Id = "c", Label = "Step C" } },
					new DagElement { Data = new DagElementData { Id = "d", Label = "Step D" } },
					new DagElement { Data = new DagElementData { Id = "end", Label = "End" } },
					new DagElement { Data = new DagElementData { Source = "start", Target = "a" } },
					new DagElement { Data = new DagElementData { Source = "start", Target = "b" } },
					new DagElement { Data = new DagElementData { Source = "a", Target = "c" } },
					new DagElement { Data = new DagElementData { Source = "b", Target = "c" } },
					new DagElement { Data = new DagElementData { Source = "c", Target = "d" } },
					new DagElement { Data = new DagElementData { Source = "d", Target = "end" } }
				}
			};

			return Task.FromResult<IActionResult>(new OkObjectResult(dagData));
		}
	}
}
