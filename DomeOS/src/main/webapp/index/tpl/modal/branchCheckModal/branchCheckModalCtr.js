'use strict';

/*
 * @author ChandraLee
 */

(function (domeApp, undefined) {
	'use strict';

	if (typeof domeApp === 'undefined') return;
	domeApp.controller('BranchCheckModalCtr', BranchCheckModalCtr);

	function BranchCheckModalCtr($modalInstance, $domeProject, codeInfo, projectId) {
		var vm = this;
		vm.check = 'Branch';
		vm.branchKey = '';
		if (projectId) {
			$domeProject.projectService.getBranches(projectId).then(function (res) {
				vm.branches = res.data.result || [];
			});
			$domeProject.projectService.getTags(projectId).then(function (res) {
				vm.tags = res.data.result || [];
			});
		} else {
			$domeProject.projectService.getBranchesWithoutId(codeInfo.codeId, codeInfo.codeManagerUserId, codeInfo.codeManager).then(function (res) {
				vm.branches = res.data.result || [];
			});
			$domeProject.projectService.getTagsWithoutId(codeInfo.codeId, codeInfo.codeManagerUserId, codeInfo.codeManager).then(function (res) {
				vm.tags = res.data.result || [];
			});
		}
		vm.toggle = function (model) {
			vm.check = model;
			vm.branchKey = '';
			vm.selectedBranch = '';
		};
		vm.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
		vm.submitBranch = function () {
			$modalInstance.close({
				type: vm.check.toLowerCase(),
				value: vm.selectedBranch
			});
		};
		vm.toggleBranch = function (branch) {
			vm.branchKey = '';
			vm.selectedBranch = branch;
		};
	}
	BranchCheckModalCtr.$inject = ['$modalInstance', '$domeProject', 'codeInfo', 'projectId'];
})(window.domeApp);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4L3RwbC9tb2RhbC9icmFuY2hDaGVja01vZGFsL2JyYW5jaENoZWNrTW9kYWxDdHIuZXMiXSwibmFtZXMiOlsiZG9tZUFwcCIsInVuZGVmaW5lZCIsImNvbnRyb2xsZXIiLCJCcmFuY2hDaGVja01vZGFsQ3RyIiwiJG1vZGFsSW5zdGFuY2UiLCIkZG9tZVByb2plY3QiLCJjb2RlSW5mbyIsInByb2plY3RJZCIsInZtIiwiY2hlY2siLCJicmFuY2hLZXkiLCJwcm9qZWN0U2VydmljZSIsImdldEJyYW5jaGVzIiwidGhlbiIsInJlcyIsImJyYW5jaGVzIiwiZGF0YSIsInJlc3VsdCIsImdldFRhZ3MiLCJ0YWdzIiwiZ2V0QnJhbmNoZXNXaXRob3V0SWQiLCJjb2RlSWQiLCJjb2RlTWFuYWdlclVzZXJJZCIsImNvZGVNYW5hZ2VyIiwiZ2V0VGFnc1dpdGhvdXRJZCIsInRvZ2dsZSIsIm1vZGVsIiwic2VsZWN0ZWRCcmFuY2giLCJjYW5jZWwiLCJkaXNtaXNzIiwic3VibWl0QnJhbmNoIiwiY2xvc2UiLCJ0eXBlIiwidG9Mb3dlckNhc2UiLCJ2YWx1ZSIsInRvZ2dsZUJyYW5jaCIsImJyYW5jaCIsIiRpbmplY3QiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFJQSxDQUFDLFVBQVVBLE9BQVYsRUFBbUJDLFNBQW5CLEVBQThCO0FBQzlCOztBQUNBLEtBQUksT0FBT0QsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNwQ0EsU0FBUUUsVUFBUixDQUFtQixxQkFBbkIsRUFBMENDLG1CQUExQzs7QUFFQSxVQUFTQSxtQkFBVCxDQUE2QkMsY0FBN0IsRUFBNkNDLFlBQTdDLEVBQTJEQyxRQUEzRCxFQUFxRUMsU0FBckUsRUFBZ0Y7QUFDL0UsTUFBSUMsS0FBSyxJQUFUO0FBQ0FBLEtBQUdDLEtBQUgsR0FBVyxRQUFYO0FBQ0FELEtBQUdFLFNBQUgsR0FBZSxFQUFmO0FBQ0EsTUFBSUgsU0FBSixFQUFlO0FBQ2RGLGdCQUFhTSxjQUFiLENBQTRCQyxXQUE1QixDQUF3Q0wsU0FBeEMsRUFBbURNLElBQW5ELENBQXdELFVBQVVDLEdBQVYsRUFBZTtBQUN0RU4sT0FBR08sUUFBSCxHQUFjRCxJQUFJRSxJQUFKLENBQVNDLE1BQVQsSUFBbUIsRUFBakM7QUFDQSxJQUZEO0FBR0FaLGdCQUFhTSxjQUFiLENBQTRCTyxPQUE1QixDQUFvQ1gsU0FBcEMsRUFBK0NNLElBQS9DLENBQW9ELFVBQVVDLEdBQVYsRUFBZTtBQUNsRU4sT0FBR1csSUFBSCxHQUFVTCxJQUFJRSxJQUFKLENBQVNDLE1BQVQsSUFBbUIsRUFBN0I7QUFDQSxJQUZEO0FBR0EsR0FQRCxNQU9PO0FBQ05aLGdCQUFhTSxjQUFiLENBQTRCUyxvQkFBNUIsQ0FBaURkLFNBQVNlLE1BQTFELEVBQWtFZixTQUFTZ0IsaUJBQTNFLEVBQThGaEIsU0FBU2lCLFdBQXZHLEVBQW9IVixJQUFwSCxDQUF5SCxVQUFVQyxHQUFWLEVBQWU7QUFDdklOLE9BQUdPLFFBQUgsR0FBY0QsSUFBSUUsSUFBSixDQUFTQyxNQUFULElBQW1CLEVBQWpDO0FBQ0EsSUFGRDtBQUdBWixnQkFBYU0sY0FBYixDQUE0QmEsZ0JBQTVCLENBQTZDbEIsU0FBU2UsTUFBdEQsRUFBOERmLFNBQVNnQixpQkFBdkUsRUFBMEZoQixTQUFTaUIsV0FBbkcsRUFBZ0hWLElBQWhILENBQXFILFVBQVVDLEdBQVYsRUFBZTtBQUNuSU4sT0FBR1csSUFBSCxHQUFVTCxJQUFJRSxJQUFKLENBQVNDLE1BQVQsSUFBbUIsRUFBN0I7QUFDQSxJQUZEO0FBR0E7QUFDRFQsS0FBR2lCLE1BQUgsR0FBWSxVQUFDQyxLQUFELEVBQVc7QUFDdEJsQixNQUFHQyxLQUFILEdBQVdpQixLQUFYO0FBQ0FsQixNQUFHRSxTQUFILEdBQWUsRUFBZjtBQUNBRixNQUFHbUIsY0FBSCxHQUFvQixFQUFwQjtBQUNBLEdBSkQ7QUFLQW5CLEtBQUdvQixNQUFILEdBQVksWUFBWTtBQUN2QnhCLGtCQUFleUIsT0FBZixDQUF1QixRQUF2QjtBQUNBLEdBRkQ7QUFHQXJCLEtBQUdzQixZQUFILEdBQWtCLFlBQVk7QUFDN0IxQixrQkFBZTJCLEtBQWYsQ0FBcUI7QUFDcEJDLFVBQU14QixHQUFHQyxLQUFILENBQVN3QixXQUFULEVBRGM7QUFFcEJDLFdBQU8xQixHQUFHbUI7QUFGVSxJQUFyQjtBQUlBLEdBTEQ7QUFNQW5CLEtBQUcyQixZQUFILEdBQWtCLFVBQVVDLE1BQVYsRUFBa0I7QUFDbkM1QixNQUFHRSxTQUFILEdBQWUsRUFBZjtBQUNBRixNQUFHbUIsY0FBSCxHQUFvQlMsTUFBcEI7QUFDQSxHQUhEO0FBSUE7QUFDRGpDLHFCQUFvQmtDLE9BQXBCLEdBQThCLENBQUMsZ0JBQUQsRUFBbUIsY0FBbkIsRUFBbUMsVUFBbkMsRUFBK0MsV0FBL0MsQ0FBOUI7QUFDQSxDQTVDRCxFQTRDR0MsT0FBT3RDLE9BNUNWIiwiZmlsZSI6ImluZGV4L3RwbC9tb2RhbC9icmFuY2hDaGVja01vZGFsL2JyYW5jaENoZWNrTW9kYWxDdHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAYXV0aG9yIENoYW5kcmFMZWVcclxuICovXHJcblxyXG4oZnVuY3Rpb24gKGRvbWVBcHAsIHVuZGVmaW5lZCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRpZiAodHlwZW9mIGRvbWVBcHAgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblx0ZG9tZUFwcC5jb250cm9sbGVyKCdCcmFuY2hDaGVja01vZGFsQ3RyJywgQnJhbmNoQ2hlY2tNb2RhbEN0cik7XHJcblxyXG5cdGZ1bmN0aW9uIEJyYW5jaENoZWNrTW9kYWxDdHIoJG1vZGFsSW5zdGFuY2UsICRkb21lUHJvamVjdCwgY29kZUluZm8sIHByb2plY3RJZCkge1xyXG5cdFx0dmFyIHZtID0gdGhpcztcclxuXHRcdHZtLmNoZWNrID0gJ0JyYW5jaCc7XHJcblx0XHR2bS5icmFuY2hLZXkgPSAnJztcclxuXHRcdGlmIChwcm9qZWN0SWQpIHtcclxuXHRcdFx0JGRvbWVQcm9qZWN0LnByb2plY3RTZXJ2aWNlLmdldEJyYW5jaGVzKHByb2plY3RJZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0dm0uYnJhbmNoZXMgPSByZXMuZGF0YS5yZXN1bHQgfHwgW107XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkZG9tZVByb2plY3QucHJvamVjdFNlcnZpY2UuZ2V0VGFncyhwcm9qZWN0SWQpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdHZtLnRhZ3MgPSByZXMuZGF0YS5yZXN1bHQgfHwgW107XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGRvbWVQcm9qZWN0LnByb2plY3RTZXJ2aWNlLmdldEJyYW5jaGVzV2l0aG91dElkKGNvZGVJbmZvLmNvZGVJZCwgY29kZUluZm8uY29kZU1hbmFnZXJVc2VySWQsIGNvZGVJbmZvLmNvZGVNYW5hZ2VyKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHR2bS5icmFuY2hlcyA9IHJlcy5kYXRhLnJlc3VsdCB8fCBbXTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCRkb21lUHJvamVjdC5wcm9qZWN0U2VydmljZS5nZXRUYWdzV2l0aG91dElkKGNvZGVJbmZvLmNvZGVJZCwgY29kZUluZm8uY29kZU1hbmFnZXJVc2VySWQsIGNvZGVJbmZvLmNvZGVNYW5hZ2VyKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHR2bS50YWdzID0gcmVzLmRhdGEucmVzdWx0IHx8IFtdO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHZtLnRvZ2dsZSA9IChtb2RlbCkgPT4ge1xyXG5cdFx0XHR2bS5jaGVjayA9IG1vZGVsO1xyXG5cdFx0XHR2bS5icmFuY2hLZXkgPSAnJztcclxuXHRcdFx0dm0uc2VsZWN0ZWRCcmFuY2ggPSAnJztcclxuXHRcdH07XHJcblx0XHR2bS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCRtb2RhbEluc3RhbmNlLmRpc21pc3MoJ2NhbmNlbCcpO1xyXG5cdFx0fTtcclxuXHRcdHZtLnN1Ym1pdEJyYW5jaCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JG1vZGFsSW5zdGFuY2UuY2xvc2Uoe1xyXG5cdFx0XHRcdHR5cGU6IHZtLmNoZWNrLnRvTG93ZXJDYXNlKCksXHJcblx0XHRcdFx0dmFsdWU6IHZtLnNlbGVjdGVkQnJhbmNoXHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHRcdHZtLnRvZ2dsZUJyYW5jaCA9IGZ1bmN0aW9uIChicmFuY2gpIHtcclxuXHRcdFx0dm0uYnJhbmNoS2V5ID0gJyc7XHJcblx0XHRcdHZtLnNlbGVjdGVkQnJhbmNoID0gYnJhbmNoO1xyXG5cdFx0fTtcclxuXHR9XHJcblx0QnJhbmNoQ2hlY2tNb2RhbEN0ci4kaW5qZWN0ID0gWyckbW9kYWxJbnN0YW5jZScsICckZG9tZVByb2plY3QnLCAnY29kZUluZm8nLCAncHJvamVjdElkJ107XHJcbn0pKHdpbmRvdy5kb21lQXBwKTsiXX0=
