using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace LearningPath.Api.Handlers
{
	public interface IUsersApiHandler
	{
		public IActionResult UsersGet(int? limit, bool? active);
	}

	public class UsersApiHandler : IUsersApiHandler
	{
		public IActionResult UsersGet(int? limit, bool? active)
		{
			return null;
		}
	}
}
